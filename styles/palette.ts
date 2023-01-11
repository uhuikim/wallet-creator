type PaletteType = 'white' | 'black' | 'background' | 'primary';
type Palette = Record<PaletteType, string>;

const palette: Partial<Palette> = {
  white: '#ffffff',
  black: '#000000',
  background: '#f4f6f9',
  primary: '#313557',
};

export default palette;
