import Button from "./Button";

export default {
    title: "component/Button",
    component: Button,

    tags: ["autodocs"],

    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary"]
        },
        label: {
            control: "text"
        },
        onclick: {
            action: "clicked"
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"]
        },
        disabled: {
            control: "boolean"
        }
    }
}

export const Primary = {
    args: {
        label: "Primary button",
        variant: "primary",
        onclick: () => alert("Primary button clicked"),
    }
}

export const Secondary = {
    args: {
        label: "Secondary button",
        variant: "secondary"
    }
}

export const Disabled = {
    args: {
        label: "Disabled Button",
        variant: "primary",
        disabled: true,
    },
};

export const SmallButton = {
    args: {
        label: "Small button",
        variant: "primary",
        size: "small"
    }
}
export const MediumButton = {
    args: {
        label: "Medium button",
        variant: "primary",
        size: "medium"
    }
}
export const LargeButton = {
    args: {
        label: "Large button",
        variant: "primary",
        size: "large",
    }
}

export const WithIcon = {
    args: {
        icon: "🔍",
        label: "Search",
        variant: "primary",
    }
}

export const OnlyIcon = {
    args: {
        icon: "🔍"
    }
}

