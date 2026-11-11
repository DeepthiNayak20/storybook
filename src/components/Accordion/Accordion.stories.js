import Accordion from "./Accordion";

export default {
    title: "component/Accordion",
    component: Accordion,
    tags: ["autodocs"],

    argTypes: {
        type: {
            control: "radio",
            options: ["single", "multiple"],
        },
        disabled: {
            control: "boolean",
        },
        items: {
            control: "object",
        },
    }
}


const faqItems = [
    {
        id: 1,
        title: "Season 1",
        content: "Explore the first season and its episodes.",
    },
    {
        id: 2,
        title: "Season 2",
        content: "Explore the second season and its episodes.",
    },
    {
        id: 3,
        title: "Season 3",
        content: "Explore the third season and its episodes.",
    },
];

export const DefaultAccordion = {
    args: {
        items: faqItems,
        type: "single",
        disabled: false
    }
}

export const MultipleAccordion = {
    args: {
        items: faqItems,
        type: "multiple",
        disabled: false
    }
}

export const DisabledAccordion = {
    args: {
        items: faqItems,
        type: "multiple",
        disabled: true
    }
}

export const CustomizedAccordion = {
    args: {
        items: [
            {
                id: 1,
                title: "Custom Item 1",
                content: "This is the content for Custom Item 1.",
            },
            {
                id: 2,
                title: "Custom Item 2",
                content: "This is the content for Custom Item 2.",
            },
            {
                id: 3,
                title: "Custom Item 3",
                content: "This is the content for Custom Item 3.",
            }
        ],
        type: "multiple"
    }
}