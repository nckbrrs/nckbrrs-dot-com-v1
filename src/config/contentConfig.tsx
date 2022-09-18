import { AppleMusicIcon } from '../assets/icons/AppleMusic';
import { InstagramIcon } from '../assets/icons/Instagram';
import { SpotifyIcon } from '../assets/icons/Spotify';
import { TwitterIcon } from '../assets/icons/Twitter';
import { YoutubeIcon } from '../assets/icons/Youtube';
import { GitHubIcon } from '../assets/icons/GitHub';
import ResumePDF from '../assets/images/resume.pdf';
import { LinkedinIcon } from '../assets/icons/Linkedin';
import { ResumeIcon } from '../assets/icons/Resume';
import { EmailIcon } from '../assets/icons/Email';

export const contentConfig = {
    home: {
        headerText: "nick barrs",
        mainText: "i'm a software developer and musician living and working in New York City.",
        socialLinks: [
            { 
                "name": "appleMusic",
                "text": "MUSIC",
                "href": "https://music.apple.com/us/artist/nick-barrs/1539845933",
                "icon": size => AppleMusicIcon(size)
            },
            {
                "name": "spotify",
                "text": "SPOTIFY",
                "href": "https://open.spotify.com/artist/2ZXVOSBi1E69IxiGuX8ofU?si=cSD9lEXoTRyGvoWBxbHGWA",
                "icon": size => SpotifyIcon(size)
            },
            {
                "name": "youtube",
                "text": "YOUTUBE",
                "href": "https://www.youtube.com/channel/UC4PnMvHxARiaOhzw-99Q4JA",
                "icon": size => YoutubeIcon(size)
            },
            {
                "name": "twitter",
                "text": "TWITTER",
                "href": "https://www.twitter.com/nckbrrs",
                "icon": size => TwitterIcon(size)
            },
            {
                "name": "instagram",
                "text": "INSTAGRAM",
                "href": "https://www.instagram.com/nckbrrs",
                "icon": size => InstagramIcon(size)
            },
            {
                "name": "github",
                "text": "GITHUB",
                "href": "https://www.github.com/nckbrrs",
                "icon": size => GitHubIcon(size)
            },
            {
                "name": "linkedin",
                "text": "LINKEDIN",
                "href": "https://www.linkedin.com/in/nckbrrs",
                "icon": size => LinkedinIcon(size)
            },
            {
                "name": "resume",
                "text": "RESUME",
                "href": ResumePDF,
                "icon": size => ResumeIcon(size)
            },
            {
                "name": "email",
                "text": "CONTACT",
                "href": "mailto:nckbrrs@icloud.com",
                "icon": size => EmailIcon(size)
            }
        ]
    }
}
