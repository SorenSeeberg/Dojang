const packageVersion = (packageId: string): string => {
  const version: string | null = localStorage.getItem(
    `package-${packageId}-version`
  );
  return version ? version : "not found";
};

type Package = {
  id: string;
  name: string;
  data: string;
  description: string;
  version: string;
};

const storePackage = (package: Package): boolean => {
  try {
    localStorage.setItem(`package-${package.id}`, JSON.stringify(package));
    localStorage.setItem(`package-${package.id}-version`, package.version);
    return true;
  } catch {
    return false;
  }
};

const getPackage = (packageId: string): Package | void => {
  try {
    const data = localStorage.getItem(`package-${packageId}-version`);
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    console.log(
      `package-${packageId}-version not found or could not be parsed.`
    );
  }
};
