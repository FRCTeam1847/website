import { createFileRoute, useNavigate } from "@tanstack/react-router";
import PiwigoImage from "../components/PiwigoImage";
import { getMediaGallery } from "./server/piwigo";

const PAGE_SIZE = 24;
const MAX_PAGE = 100_000;

function parseSearchInteger(value: unknown, minimum: number, maximum: number) {
	const parsed =
		typeof value === "number"
			? value
			: typeof value === "string" && /^\d+$/.test(value)
				? Number(value)
				: Number.NaN;

	return Number.isSafeInteger(parsed) && parsed >= minimum && parsed <= maximum
		? parsed
		: undefined;
}

export const Route = createFileRoute("/media")({
	validateSearch: (search: Record<string, unknown>) => ({
		album: parseSearchInteger(search.album, 1, Number.MAX_SAFE_INTEGER),
		page: parseSearchInteger(search.page, 0, MAX_PAGE),
	}),
	loaderDeps: ({ search }) => ({
		album: search.album,
		page: search.page,
	}),
	loader: ({ deps }) =>
		getMediaGallery({
			data: {
				albumId: deps.album,
				page: deps.page,
			},
		}),
	component: MediaPage,
	head: () => ({
		meta: [
			{
				name: "description",
				content: "Photos and albums from Wyandotte Robotics.",
			},
			{
				title: "Media - Wyandotte Robotics",
			},
		],
	}),
});

function MediaPage() {
	const { album: albumId, page = 0 } = Route.useSearch();
	const { categories, selectedCategory, images, totalImages } =
		Route.useLoaderData();
	const navigate = useNavigate({ from: "/media" });
	const pageCount = Math.ceil(totalImages / PAGE_SIZE);

	function selectAlbum(id: number) {
		void navigate({
			search: (previous) => ({
				...previous,
				album: id,
				page: undefined,
			}),
		});
	}

	function showAlbums() {
		void navigate({ search: () => ({ album: undefined, page: undefined }) });
	}

	function changePage(nextPage: number) {
		void navigate({
			search: (previous) => ({
				...previous,
				page: nextPage === 0 ? undefined : nextPage,
			}),
		});
	}

	return (
		<main className="page-wrap rise-in px-4 py-10">
			<header className="text-center">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
					Team Media
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Photos and memories from Wyandotte Robotics.
				</p>
			</header>

			{albumId !== undefined && (
				<button
					type="button"
					className="mt-8 rounded-lg border border-(--line) px-4 py-2 font-medium transition hover:bg-gray-100"
					onClick={showAlbums}
				>
					All albums
				</button>
			)}

			{albumId !== undefined && selectedCategory && (
				<section className="mt-8">
					<h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
					{selectedCategory.comment && (
						<p className="mt-2 text-muted-foreground">
							{selectedCategory.comment}
						</p>
					)}
				</section>
			)}

			{categories.length > 0 && (
				<section className="mt-8">
					<h2 className="mb-4 text-xl font-semibold">
						{albumId === undefined ? "Albums" : "More albums"}
					</h2>
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{categories.map((category) => (
							<button
								key={category.id}
								type="button"
								className="overflow-hidden rounded-xl border border-(--line) bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
								onClick={() => selectAlbum(category.id)}
							>
								{category.tn_url ? (
									<PiwigoImage
										src={category.tn_url}
										alt=""
										className="aspect-video w-full bg-gray-100 object-cover"
									/>
								) : (
									<div className="aspect-video w-full bg-gray-100" />
								)}
								<span className="block p-4">
									<span className="block font-semibold">{category.name}</span>
									<span className="mt-1 block text-sm text-muted-foreground">
										{category.total_nb_images} photos
										{category.nb_categories > 0 &&
											` · ${category.nb_categories} albums`}
									</span>
								</span>
							</button>
						))}
					</div>
				</section>
			)}

			{albumId !== undefined && images.length > 0 && (
				<section className="mt-8">
					<h2 className="sr-only">Photos</h2>
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
						{images.map((image) => {
							const thumbnail =
								image.derivatives?.small?.url ?? image.derivatives?.thumb?.url;

							return (
								<div
									key={image.id}
									className="group overflow-hidden rounded-lg bg-gray-100"
								>
									<a
										href={image.element_url}
										target="_blank"
										rel="noreferrer"
										aria-label={`View full-size ${image.name}`}
										className="block overflow-hidden"
									>
										{thumbnail && (
											<PiwigoImage
												src={thumbnail}
												alt={image.name}
												className="aspect-square w-full object-cover transition group-hover:scale-105"
											/>
										)}
									</a>
									<a
										href={image.element_url}
										download
										className="block px-3 py-2 text-center text-sm font-medium hover:underline"
									>
										Download original
									</a>
								</div>
							);
						})}
					</div>
					<div className="mt-8 flex items-center justify-center gap-4">
						<button
							type="button"
							className="rounded-lg border border-(--line) px-4 py-2 disabled:opacity-50"
							onClick={() => changePage(page - 1)}
							disabled={page === 0}
						>
							Previous
						</button>
						<span className="text-sm text-muted-foreground">
							Page {page + 1} of {pageCount}
						</span>
						<button
							type="button"
							className="rounded-lg border border-(--line) px-4 py-2 disabled:opacity-50"
							onClick={() => changePage(page + 1)}
							disabled={page + 1 >= pageCount}
						>
							Next
						</button>
					</div>
				</section>
			)}

			{albumId !== undefined &&
				images.length === 0 &&
				categories.length === 0 && (
					<p className="mt-8 text-center text-muted-foreground">
						This album does not contain any public photos yet.
					</p>
				)}

			{albumId === undefined && categories.length === 0 && (
				<p className="mt-8 text-center text-muted-foreground">
					There are no public albums yet.
				</p>
			)}
		</main>
	);
}
