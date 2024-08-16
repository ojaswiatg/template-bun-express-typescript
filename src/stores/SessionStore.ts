import { createStorage } from "unstorage";
import lruCacheDriver from "unstorage/drivers/lru-cache";

function useSessionStore() {
    const userSessionCache = createStorage({
        driver: lruCacheDriver({
            max: 100, // Keeps a max of 100 items in the cache
        }),
    });

    async function storeUserSession(userId: string) {
        await userSessionCache.setItem(userId, true);
    }

    async function getUserSession(userId: string) {
        await userSessionCache.getItem(userId);
    }

    return {
        storeUserSession,
        getUserSession,
    };
}

const sessionStore = useSessionStore();
export default sessionStore;
