import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Account, ApiBenefits, ApiCodes } from "@/types/types";

interface ApiProviderProps {
  children: ReactNode;
}

export type ApiContextType = {
  state: {
    codes: {
      accounts: [] | ApiCodes[];
    };
    benefits: {
      accounts: [] | ApiBenefits[];
    };
  };
  hooks: {};
};

export const ApiContext = createContext<ApiContextType>({
  state: {
    codes: {
      accounts: [],
    },
    benefits: {
      accounts: [],
    },
  },
  hooks: {},
});

function ApiProvider({ children }: ApiProviderProps) {
  const [codes, setCodes] = useState({
    accounts: [],
  });
  const [benefits, setBenefits] = useState({
    accounts: [],
  });

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
  const { state } = useContext(ApiContext);

  if (state.benefits.accounts.length === 0) return state.benefits.accounts;

  const benefits = state?.benefits?.accounts as Account[];

  return benefits
    .filter((item) => item.tags[0]?.name === tagName)
    .slice(0, limit)
    .map((acc) => {
      return {
        ...acc,
        branches: acc.branches.sort((a, b) => a.location - b.location),
      };
    })
    .sort((a, b) => a.branches[0].location - b.branches[0].location)
    .map((item) => {
      return {
        name: item.name,
        image: item.images[0].url,
        crmid: item.crmid,
        benefits: item.benefits.sort((a, b) => (a.type > b.type ? -1 : 1)),
        nearLocation: item.branches[0].location,
      };
    });
};

export const useCodes = () => {
  const { state } = useContext(ApiContext);

  if (state.codes.accounts.length === 0) return state.codes.accounts;

  const codes = state?.codes?.accounts as Account[];

  return codes
    .filter((item) => item.haveVoucher === true)
    .slice(0, 4)
    .map((item) => {
      return {
        name: item.name,
        image: item.images[0].url,
        crmid: item.crmid,
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};
