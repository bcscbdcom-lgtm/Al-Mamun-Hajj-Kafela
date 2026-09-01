import { hajjPackages } from './hajjPackages';
import { umrahPackages } from './umrahPackages';
import { PackageItem } from '../types';

export { hajjPackages } from './hajjPackages';
export { umrahPackages } from './umrahPackages';

export const allPackages: PackageItem[] = [...hajjPackages, ...umrahPackages];

export const getPackageById = (id: string): PackageItem | undefined => {
  return allPackages.find((pkg) => pkg.id === id);
};

export const getHajjPackageById = (id: string): PackageItem | undefined => {
  return hajjPackages.find((pkg) => pkg.id === id);
};

export const getUmrahPackageById = (id: string): PackageItem | undefined => {
  return umrahPackages.find((pkg) => pkg.id === id);
};
