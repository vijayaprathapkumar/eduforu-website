/* eslint-disable @typescript-eslint/no-explicit-any */
import { AustraliaDetails } from "./australia";
import { CanadaDetails } from "./canada";
import { IrelandDetails } from "./ireland";
import { UKDetails } from "./uk";

export const pageMap: any = {
  uk: UKDetails,
  canada: CanadaDetails,
  ireland: IrelandDetails,
  australia: AustraliaDetails,
};
