type PiwigoCategory = {
  id: number;
  name: string;
  comment: string | null;
  id_uppercat: number | string | null;
  nb_categories: number;
  total_nb_images: number;
  representative_picture_id: number | string | null;
  tn_url: string | null;
};