import caseMock from 'mock/case.json';
import { Rarity } from 'components/Card/CardChance';

export interface Item {
  id: string;
  title: string;
  icon: string;
  loader?: boolean;
  value: string;
  rarity: Rarity;
}

export type Items = Item[];

export interface Case {
  title: string;
  icon: string;
  items: Items;
}

interface CaseService {
  getById: (id: string) => Promise<Case>;
}

class MockCaseService implements CaseService {
  getById = async (id: string) =>
    new Promise<Case>((res) => {
      // eslint-disable-next-line no-console
      console.log(`case id: ${id}`);
      setTimeout(res, 3000, caseMock);
    });
}

const caseService = new MockCaseService();

export default caseService;
