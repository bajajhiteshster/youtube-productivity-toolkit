# YouTube Productivity Toolkit

![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome-orange)
![Status](https://img.shields.io/badge/status-active-success)

A lightweight Chrome extension that improves the YouTube viewing experience with smart playback and productivity features.


---

## Features

• Automatically skip interruptions while watching YouTube  
• Clean video viewing experience  
• Remove distracting banners and overlays  
• Hide Shorts (optional focus mode)
• Lightweight Chrome extension

This extension runs locally in your browser and does **not collect any user data**.

---

## Demo

![Demo](screenshots/demo.gif)

---

## Installation

### Install from Source

1. Download or clone the repository

```
git clone https://github.com/yourusername/youtube-pro-adkiller.git
```

2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer Mode** (top right)

4. Click **Load Unpacked**

5. Select the project folder

The extension will now run automatically on YouTube.

---

## How It Works

The extension monitors the YouTube page for advertisement states. When an ad is detected, it:

* Clicks the **Skip Ad** button instantly
* Fast-forwards the ad video
* Closes overlay banner ads
* Restores normal playback

This allows videos to continue playing with minimal interruption.

---

## Project Structure

```
youtube-pro-adkiller/
│
├── manifest.json
├── content.js
├── README.md
├── LICENSE
└── screenshots
```

---

## Requirements

* Google Chrome or Chromium-based browser
* Developer mode enabled for manual installation

---

## Disclaimer

This project is for educational and personal use.

It is **not affiliated with or endorsed by YouTube or Google**.

---

## Contributing

Contributions are welcome.

Ideas for improvement:

* Faster ad detection
* Additional UI controls
* Compatibility improvements

Please open a pull request or issue.

---

## License

MIT License

---

## Author
Published by FlowKit Labs
Built as a small open-source project by an engineer passionate about productivity tools.
