import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext({
  state: {
    codes: [],
    benefits: [],
  },
  hooks: {},
});

function ApiProvider({ children }: ApiProviderProps) {
  const [codes, setCodes] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const fetchData = async () => {
    await Promise.allSettled([fetchCodes(), fetchBenefits()]);
  };

  const fetchCodes = async () => {
    try {
      const codes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/codes/data`
      );
      const jsonCodes = await codes.json();
      setCodes(jsonCodes);
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchBenefits = async () => {
    try {
      const apiBeneftis = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/benefits/data`
      );
      const jsonBenefits = await apiBeneftis.json();
      setBenefits(jsonBenefits);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await fetchData();
    };
    getData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        state: {
          codes,
          benefits,
        },
        hooks: {
          setCodes,
        },
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;

export const useBenefits = (tagName: string = "", limit: number = 4) => {
  const { state } = useContext(ApiContext) as any;

  if (state.benefits.length === 0) return state.benefits;

  console.warn("HAY DATA", state.benefits);
  return state?.benefits?.accounts
    .filter((item: any) => item.tags[0]?.name === tagName)
    .slice(0, limit)
    .map((acc: any) => {
      return {
        ...acc,
        branches: acc.branches.sort(
          (a: any, b: any) => a.location - b.location
        ),
      };
    })
    .sort((a: any, b: any) => a.branches[0].location - b.branches[0].location)
    .map((item: any) => {
      return {
        name: item.name,
        image: item.images[0].url,
        crmid: item.crmid,
        benefits: item.benefits.sort((a: any, b: any) =>
          a.type > b.type ? -1 : 1
        ),
        nearLocation: item.branches[0].location,
      };
    });
};

export const useCodes = (): any => {
  const { state } = useContext(ApiContext) as any;

  if (state.codes.length === 0) return state.codes;

  return state?.codes?.accounts
    .filter((item: any) => item.haveVoucher === true)
    .slice(0, 4)
    .map((item: any) => {
      return {
        name: item.name,
        image: item.images[0].url,
        crmid: item.crmid,
      };
    })
    .sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
};
