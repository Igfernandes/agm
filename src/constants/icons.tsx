import { othersColors } from "@assets/colors/colors";
import { FacebookBI } from "@assets/Icons/black/FacebookBI";
import { GlobeBI } from "@assets/Icons/black/Globe";
import { InstagramBI } from "@assets/Icons/black/InstagramBI";
import { LinkedinBI } from "@assets/Icons/black/LinkedinBI";
import { TwitterBI } from "@assets/Icons/black/TwitterBI";
import { WhatsAppBI } from "@assets/Icons/black/WhatsAppBI";
import { AgencySocialMediaPlatforms } from "@type/Agencies/SocialMedia";

export const Icons = {
    "WHATSAPP": <WhatsAppBI fill={othersColors.white} width={24} height={24} />,
    "INSTAGRAM": <InstagramBI fill={othersColors.white} width={24} height={24} />,
    "FACEBOOK": <FacebookBI fill={othersColors.white} width={24} height={24} />,
    "LINKEDIN": <LinkedinBI fill={othersColors.white} width={24} height={24} />,
    "TWITTER": <TwitterBI fill={othersColors.white} width={24} height={24} />,
    "SITE": <GlobeBI  fill={othersColors.white} width={24} height={24} />
} as Record<AgencySocialMediaPlatforms, React.ReactNode>;