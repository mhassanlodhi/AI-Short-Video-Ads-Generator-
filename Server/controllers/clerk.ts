import { Request, Response } from "express";
import { verifyWebhook } from '@clerk/express/webhooks'
import { prisma } from "../configs/prisma.js";


const clerkWebhooks = async (req: Request, res: Response) => {
    try {
        const evt: any = await verifyWebhook(req)
        // Getting Dat from request
        const { data, type } = evt;

        // Switch Cases for different Events
        switch (type) {
            case "user.created": {
                await prisma.user.create({
                    data: {
                        id: data.id,
                        email: data?.email_addresses[0]?.email_address,
                        name: data?.first_name + " " + data?.last_name,
                        image: data?.image_url
                    }
                })
                break;
            }

            case "user.updated": {
                await prisma.user.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        email: data?.email_addresses[0]?.email_address,
                        name: data?.first_name + " " + data?.last_name,
                        image: data?.image_url
                    }
                })
                break;
            }

            case "user.deleted": {
                await prisma.user.delete({
                    where: {
                        id: data.id
                    }
                })
                break;
            }

            case "paymentAttempted.updated": {
                if ((data.charge_type === "recurring" || data.charge_type === "checkout") && data.status === "paid") {
                    const credits = { pro: 80, premium: 240, }
                    const clerkUserId = data?.payer?.user_id;
                    const planId: keyof typeof credits = data?.subscription_items?.[0]?.plan?.slug;
                }
                break;
            }


            default:
                break;
        }


    } catch (error) {

    }

}