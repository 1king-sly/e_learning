// Options.server.tsx
'use server'
import { fetchAllClusters } from '@/app/lib/actions';

export async function getServerData() {
  try {
    const clusters = await fetchAllClusters();

    return { clusters };
  } catch (error) {
    console.error('Error fetching clusters:', error);
    return { clusters: [] };
  }
}
