import {cars} from ".prisma/client";
import Image from "next/image";
import {prisma} from "@/db";

export async function CarCard(car: cars) {
    return (
        <div className="rounded shadow w-full mx-auto m-2 cursor-pointer">
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{car.brand} {car.model}</div>

                <div className="font-light text-xs mb-2">
                    {car.car_options.map((car_option: prisma.car_options, index: number) => (
                        <span key={car_option.options_id}>{car_option.options.name}
                            {index < car.car_options.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </div>

                <div className={"flex flex-row max-h-48 h-48"}>
                    <Image
                        src={`/${car.id}/1.png`}
                        priority={true}
                        alt="Car image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="sm:w-72 md:w-72 lg:w-72"
                    />
                    <div className={"ml-2 flex flex-col"}>
                        <div className={"text-2xl flex-1 mt-2 font-bold"}>€{car.price},-</div>

                        <div className={"flex-1 flex-row"}>
                            <a
                                href={"https://www.anwb.nl/verzekeringen/autoverzekering/regulier/berekenen?utm_source=autoscout_calculator_sell_vz_avz&utm_medium=display&utm_campaign=sell_vz_avz&utm_content=autoscout_listpage&rKenteken=" + car.kenteken}
                                target={"_blank"}
                                className={"border p-2 rounded-2xl shadow font-bold hover:bg-black hover:text-white"}
                            >Bereken uw premie </a>
                        </div>

                        <div className={"text-xs mb-5"}>
                            <span><span className={"font-bold"}>Jaartal:</span> {car.year}, </span>
                            <span><span className={"font-bold"}>Kilometers:</span> {car.year}, </span>
                            <span>{car.power_pk}pk, </span>
                            <span>{car.power_kw}kw, </span>
                            <span><span className={"font-bold"}>Kleur:</span> {car.color}, </span>
                            <span><span className={"font-bold"}>Type:</span> {car.body}, </span>
                            <span><span className={"font-bold"}>Kenteken:</span> {car.kenteken}, </span>
                            <span><span className={"font-bold"}>Transmissie:</span> {car.transmission} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}