import type { InputFieldItem } from "@components/InputField";

export interface formProps{
    heading:string;
    fields: InputFieldItem[],
    btnText:string;
    onSubmit: (e:React.FormEvent<HTMLFormElement>)=>void;
    text:string;
    linkText:string;
    linkTo:string;
    isLoading:boolean;
};
