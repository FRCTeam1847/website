type ImagesResult = {
	paging: {
		page: number;
		total_count: number;
	};
	images: PiwigoImage[];
};
