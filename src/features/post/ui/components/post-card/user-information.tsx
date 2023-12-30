import { UserInformationProps } from "./types";
import Link from "next/link";

export default function UserInformation({ user }: UserInformationProps) {
    return (
        <div className="row gap-2 py-3">
            <img
                className="rounded-full"
                src={user.profilePicture}
                alt={`${user.name}'s profile picture`}
                width={40}
                height={40}
            />
            <Link href={`users/${user.id}`} className="text-secondary">{user.name}</Link>
        </div>
    );
}
