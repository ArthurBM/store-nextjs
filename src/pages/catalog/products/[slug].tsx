import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';

export default function Search() {
    const router = useRouter()

    return (
        <h1>{router.query.slug}</h1>
    )
}
