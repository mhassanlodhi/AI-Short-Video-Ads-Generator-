import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and drop your images or videos. We auto-optimize size and formats.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great fidelity'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready videos and Reels'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits per month',
            'Standard UI/UX design',
            'No Watermark',
            'Slower generation speed',
            'Email Support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators and Small Teams.',
        credits: 80,
        features: [
            '80 Credits per month',
            'Advanced UI/UX design',
            'No Watermark',
            'Video Generation',
            'Priority Support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 Credits per month',
            'FHD Quality',
            'No Watermark',
            'Faster generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation works?',
        answer: 'We leverage state-of-the-art AI models trained on diverse datasets to generate high-quality images and videos based on your input. Our platform optimizes the generation process for speed and fidelity.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes - you can cancel from your dashboard. You will retain access to your credits and generated content until the end of your billing cycle.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes - you receive full commercial rights to any images and videos generated on the platform. Use them in your marketing, e-commerce, social media and beyond without restrictions.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG abd WEBP. Outputs are high-resolution PNGs and MP4s optimized for social paltforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];