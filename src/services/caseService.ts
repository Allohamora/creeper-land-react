import caseMock from 'mock/case.json';
import { IconType } from 'components/Card/icons';
import { PaletteColor } from 'styles/theme';

export interface Item {
  id: string;
  title: string;
  icon: IconType;
  loader?: boolean;
  value: string;
  lines: PaletteColor;
}

export type Items = Item[];

export interface Case {
  title: string;
  icon: IconType;
  stock: number;
  items: Items;
}

interface CaseService {
  getById: (id: string) => Promise<Case>;
}

class MockCaseService implements CaseService {
  getById = async () =>
    new Promise<Case>((res) => {
      setTimeout(res, 3000, caseMock);
    });
}

const caseService = new MockCaseService();

export default caseService;