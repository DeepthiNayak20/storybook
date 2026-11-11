import DropDown from "./DropDown";

export default {
    title: "component/DropDown",
    component: DropDown,

    tags: ["autodocs"],

    argTypes: {
        disabled: {
            control: "boolean",
        },
        label: {
            control: "text",
        },

        placeholder: {
            control: "text",
        },

        value: {
            control: "text",
        },

    }
}

const countryOptions = [
    { id: 1, label: "India", value: "india" },
    { id: 2, label: "USA", value: "usa" },
    { id: 3, label: "UK", value: "uk" },
    { id: 4, label: "Canada", value: "canada" },
];

export const DefaultDropDown = {
    args: {
        label: "Country",
        options: countryOptions,
        placeholder: "Select a country",

    }
}

export const selectedValue = {
    args: {
        label: "Selected Country",
        options: countryOptions,
        value: "india"
    }
}

export const DisabledDropDown = {
    args: {
        disabled: true,
        label: "Country",
        options: countryOptions,
        placeholder: "Select a country",
        value: ""
    }
}


export const customizedDropDown = {
    args: {
        label: "Customized vehicles",
        placeholder: "Select a vehicle",
        options: [
            { id: 1, label: "Car", value: "car" },
            { id: 2, label: "Bike", value: "bike" },]
    }
}