/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Diseases } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiseasesUpdateFormInputValues = {
    name?: string;
    description?: string;
    symptoms?: string[];
    actions?: string;
    checkpoints?: string[];
    selfcare?: string[];
};
export declare type DiseasesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    symptoms?: ValidationFunction<string>;
    actions?: ValidationFunction<string>;
    checkpoints?: ValidationFunction<string>;
    selfcare?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiseasesUpdateFormOverridesProps = {
    DiseasesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    symptoms?: PrimitiveOverrideProps<TextFieldProps>;
    actions?: PrimitiveOverrideProps<TextFieldProps>;
    checkpoints?: PrimitiveOverrideProps<TextFieldProps>;
    selfcare?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiseasesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiseasesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diseases?: Diseases;
    onSubmit?: (fields: DiseasesUpdateFormInputValues) => DiseasesUpdateFormInputValues;
    onSuccess?: (fields: DiseasesUpdateFormInputValues) => void;
    onError?: (fields: DiseasesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiseasesUpdateFormInputValues) => DiseasesUpdateFormInputValues;
    onValidate?: DiseasesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiseasesUpdateForm(props: DiseasesUpdateFormProps): React.ReactElement;
