/* eslint-disable @typescript-eslint/no-explicit-any */
import { AustraliaDetails } from "./australia";
import { CanadaDetails } from "./canada";
import { EuCountriesDetails } from "./euCountries";
import { GermanyDetails } from "./germany";
import { IrelandDetails } from "./ireland";
import { NewZealandDetails } from "./newZealand";
import { SingaporeDetails } from "./singapore";
import { UKDetails } from "./uk";

export const pageMap: any = {
  uk: UKDetails,
  canada: CanadaDetails,
  ireland: IrelandDetails,
  australia: AustraliaDetails,
  singapore: SingaporeDetails,
  newZealand: NewZealandDetails,
  germany: GermanyDetails,
  euCountries: EuCountriesDetails
};
