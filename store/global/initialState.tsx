interface NavItem {
  href: string;
  displayName: string;
}

export interface GlobalState {
  navItems: Array<NavItem>
}

const initialState: GlobalState = {
  navItems: [],
};

export default initialState;