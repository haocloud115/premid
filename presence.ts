const presence = new Presence({
	clientId: "1016991973531451502",
}),
strings = presence.getStrings({
	play: "general.playing",
	pause: "general.paused",
}),
browsingTimestamp = Math.floor(Date.now() / 1000);
let user: HTMLElement | Element | string, title: HTMLElement | Element | string;

presence.on("UpdateData", async () => {
const presenceData: PresenceData = {
	largeImageKey: "vg",
};

if (document.location.hostname === "http://wiki.yourauth.vn") {
	if (document.location.pathname === "/") {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Đang truy cập:";
		presenceData.state = "Trang Chủ"
		presenceData.smallImageKey = "Vietnamese";
	} else if (document.location.pathname.includes("/vi/home")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Đang truy cập:";
		presenceData.state = "Trang chính";
		presenceData.smallImageKey = "Vietnamese";
	} else if (document.location.pathname.includes("/e/vi")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Đang truy cập:";
		presenceData.state = "Chế độ chỉnh sửa";
		presenceData.smallImageKey = "Vietnamese";
	} else if (document.location.pathname.includes("/s/vi")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Đang truy cập:";
		presenceData.state= "Nguồn text"
		presenceData.smallImageKey = "Vietnamese";
	} else if (document.location.pathname.includes("/en/home")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Accesssing to:";
		presenceData.state = "Home Page";
		presenceData.smallImageKey = "English";
	} else if (document.location.pathname.includes("/e/en")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Accesssing to:";
		presenceData.state = "Editor Mode";
		presenceData.smallImageKey = "English";
	} else if (document.location.pathname.includes("/s/en")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Accesssing to:";
		presenceData.state = "Source Text";
		presenceData.smallImageKey = "English";
	} else if (document.location.pathname.includes("/p/profile")) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Accesssing to:";
		presenceData.state = "Profile";
		presenceData.smallImageKey = "English";
	}
}
