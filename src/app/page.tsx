import {prisma} from "@/db";
import {CarCard} from "@/components/CarCard";

export default async function Home() {

    const latestCars = await prisma.cars.findMany({
        include: {
            car_options: {
                include: {
                    options: true
                }
            }
        },
        orderBy: {
            id: 'desc',
        },
        take: 5,
    })

    return (
        <>
            <ul>
                {latestCars.map(car => (
                    <CarCard key={car.id} {...car}/>
                ))}
            </ul>
        </>
    )
}