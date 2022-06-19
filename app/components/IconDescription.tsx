import {Link} from "@remix-run/react";

export type Props = {
    name: string;
    description: string;
    link?: string;
    isLast?: boolean;
}

export default function IconDescription({ name, description, link, isLast = false }: Props) {
    return (
        <div className={`flex bg-zinc-900/[.5] p-2 rounded-md ${!isLast && "mb-3"}`}>
            <div className="min-w-[8.8rem] bg-zinc-900 p-4 m-1 rounded-sm grayscale">
                <img src={`icons/${name.toLowerCase()}.svg`} alt={`${name} Logo`} />
            </div>

            <div className="flex-col pl-3">
                <div>
                    {link ? <Link to={link} target="_blank" rel="noreferrer" className="text-3xl">{name}</Link> : <p className="text-3xl">{name}</p>}
                </div>

                <span className="text-lg text-zinc-400">{description}</span>
            </div>
        </div>
    );
}
