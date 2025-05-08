import { Button } from "@/components/ui/button.tsx";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
  coverImage: string;
  avatar: string;
}

export function ProfileHeader({
  name,
  title,
  description,
  coverImage,
  avatar,
}: ProfileHeaderProps) {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Subscription successful!",
      description: `You are now connected with ${name}`,
    });
  };

  return (
    <div className="relative animate-fade-in">
      {/* ───────────────── Cover image ───────────────── */}
      <div
        className="h-80 w-full rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ──────────────── Header content ─────────────── */}
      {/* pull the block up so it overlaps the bottom of the cover just a bit */}
      <div className="px-12 -mt-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* ① Left column — name / title / bio */}
        <div>
          {/* name + avatar in one line */}
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-800">
              {name}
            </h1>

            {/* avatar on the RIGHT of the name */}
            <img
              src={avatar}
              alt={name}
              className="shrink-0 w-16 h-16 rounded-full ring-4 ring-white shadow-md object-cover"
            />
          </div>

          <p className="text-primary font-medium mt-1">{title}</p>

          <p className="text-gray-600 max-w-2xl mt-4">{description}</p>
        </div>

        {/* ② Right column — action buttons */}
        <div className="flex gap-4 self-start">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              toast({
                title: "Message sent",
                description: "Your message has been sent to the influencer",
              })
            }
            className="flex items-center gap-2"
          >
            <MessageSquare size={18} />
            <span>Message</span>
          </Button>

          <Button
            size="lg"
            onClick={handleSubscribe}
            className="transition-transform hover:scale-105"
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}
