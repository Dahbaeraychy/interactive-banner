import { darkenColor, getContrastTextColor } from "@/utils/contrast";
import Image from "next/image";
import React, { forwardRef } from "react";

interface BannerProps {
	title: string;
	description: string;
	image?: string | null;
	bgColor: string;
}
const Banner = forwardRef<
	HTMLDivElement,
	BannerProps & { bannerStyle?: string }
>(({ title, description, image, bgColor, bannerStyle }, ref) => {
	const baseTextColor = getContrastTextColor(bgColor);
	const baseHex = baseTextColor === "white" ? "#ffffff" : "#000000";
	const descTextColor = darkenColor(baseHex, 20);

	const MinimalBannerStyle = () => {
		return (
			<div
				ref={ref}
				className="w-full max-w-[1200px] h-[24rem] relative grid md:grid-cols-2 p-10 lg:px-16 "
				style={{ backgroundColor: bgColor }}
			>
				<div className="h-full flex flex-col justify-center space-y-2 ">
					<h1
						className="text-4xl font-bold dark:text-neutral-200 "
						style={{
							color: baseTextColor,
						}}
					>
						{title}
					</h1>
					<p
						className="text-lg break-words pr-6 lg:pr-10 text-justify dark:text-neutral-400 "
						style={{
							color: descTextColor,
						}}
					>
						{description}
					</p>
				</div>

				<div className="flex justify-center items-center relative ">
					{image && (
						<Image
							src={image}
							alt="Banner"
							width={500}
							height={500}
							className="max-h-[250px] max-w-[400px] object-contain z-20"
						/>
					)}
				</div>
			</div>
		);
	};

	const ModernBannerStyle = () => {
		return (
			<div
				ref={ref}
				className="w-full max-w-[1200px] h-[24rem] relative grid md:grid-cols-2 gap-4 p-10 px-16 overflow-hidden rounded-lg "
				style={{ backgroundColor: bgColor }}
			>
				<div className="flex flex-col justify-center space-y-2 ">
					<h1
						className="text-4xl font-bold dark:text-neutral-200 "
						style={{
							color: baseTextColor,
						}}
					>
						{title}
					</h1>
					<p
						className="text-lg break-words pr-6 lg:pr-10 text-justify dark:text-neutral-400 "
						style={{
							color: descTextColor,
						}}
					>
						{description}
					</p>
				</div>

				<div className="overflow-hidden flex justify-center items-center relative ">
					<div className="grid grid-cols-2 gap-4 h-[26rem] max-w-[26rem] w-full ml-auto p-2 rounded-md -rotate-[45deg] ">
						{Array.from({ length: 3 }, (_, index) => (
							<div
								key={index}
								className="h-48 w-48 border rounded-lg flex justify-center items-center relative shadow-md overflow-hidden "
								style={{
									borderColor: darkenColor(baseHex, index === 0 ? 60 : 75),
									backgroundColor: darkenColor(bgColor, index === 0 ? 20 : 40), // Different shade for each diamond
								}}
							>
								{image && index === 0 && (
									<Image
										src={image}
										alt="Banner"
										width={200}
										height={200}
										className="max-h-[220px] max-w-[220px] object-contain z-20 rotate-45 "
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	const RetroBannerStyle = () => {
		return (
			<div
				ref={ref}
				className="w-full max-w-[1200px] min-h-[24rem] relative flex items-center justify-center "
				style={{ backgroundColor: bgColor }}
			>
				<div
					className="flex items-center space-x-3  "
					style={{
						borderColor: darkenColor(baseHex, 60),
					}}
				>
					<div className="relative flex justify-center items-center overflow-hidden ">
						{image && (
							<Image
								src={image}
								alt="Banner"
								width={500}
								height={500}
								className="max-h-[250px] max-w-[250px] object-contain z-20"
							/>
						)}
					</div>

					<hr
						className=" rotate-90 "
						style={{
							borderColor: darkenColor(baseHex, 60),
						}}
					/>

					<div className="h-full flex flex-col justify-center space-y-2 max-w-xl ">
						<h1
							className="text-4xl font-bold dark:text-neutral-200 "
							style={{
								color: baseTextColor,
							}}
						>
							{title}
						</h1>
						<hr
							style={{
								borderColor: darkenColor(baseHex, 50),
							}}
						/>
						<p
							className="text-lg break-words pr-6 lg:pr-10 text-justify dark:text-neutral-400 "
							style={{
								color: descTextColor,
							}}
						>
							{description}
						</p>
					</div>
				</div>
			</div>
		);
	};

	const renderBanner = () => {
		switch (bannerStyle) {
			case "minimal":
				return <MinimalBannerStyle />;
			case "modern":
				return <ModernBannerStyle />;
			case "retro":
				return <RetroBannerStyle />;
			default:
				return null;
		}
	};

	return <div className="">{renderBanner()}</div>;
});

Banner.displayName = "Banner";

export default Banner;
