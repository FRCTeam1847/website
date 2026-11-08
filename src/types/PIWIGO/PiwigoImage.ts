type PiwigoImage = {
  id: number;
  name: string;
  comment: string | null;
  element_url: string;
  derivatives?: {
    thumb?: { url: string };
    small?: { url: string };
    medium?: { url: string };
  };
};