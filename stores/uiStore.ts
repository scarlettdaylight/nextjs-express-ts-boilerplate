export interface InitialUIData {
  isMenuOpen?: boolean;
}

export interface UIStore extends Required<InitialUIData> {
  openMenu(): void;
  closeMenu(): void;
  reset(): void;
}

export const createUIStore = (serverStore: InitialUIData): UIStore => ({
  isMenuOpen: serverStore.isMenuOpen ?? false,
  // SelectProductBar
  openMenu() {
    if (this.isMenuOpen) {
      return;
    }
    this.isMenuOpen = true;
  },
  closeMenu() {
    if (!this.isMenuOpen) {
      return;
    }
    this.isMenuOpen = false;
  },
  reset() {
    this.isMenuOpen = false;
  },
});
