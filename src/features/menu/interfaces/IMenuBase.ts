interface IMenuBase {
  name: string;
  posRef: string;
  description?: string | null;
  isAvailable: boolean;
}

export default IMenuBase;
