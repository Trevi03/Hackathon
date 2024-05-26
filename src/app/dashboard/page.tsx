import * as React from 'react';
import type { Metadata } from 'next';
// import Grid from '@mui/material/Unstable_Grid2';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { Session } from 'inspector';
import Sidebar from './sidebar';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={8}> {/* First column takes up 2/3 of the width on md and lg screens */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}> {/* Join Session */}
            <LatestProducts sx={{ height: 'auto' }} text='Join Session' topmarg={0}/>
          </Grid>
          <Grid item xs={12} sm={6}> {/* First item in the first column */}
            <Budget sx={{ height: 'auto' }} session="Rita's Game" game="Counter Strike 2" level="Beginner" playernum="4" members="17,400" imageUrl="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1716504320" />
          </Grid>
          <Grid item xs={12} sm={6}> {/* Second item in the first column */}
            <Budget sx={{ height: 'auto' }} session="Miri's Game" game="League of Legends" level="Advanced" playernum="5" members="35,678" imageUrl="https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b" />
          </Grid>
          <Grid item xs={12} sm={12}> {/* Recommended Games */}
            <LatestProducts sx={{ height: 'auto' }} text='Recommended Games'topmarg={5}/>
          </Grid>
          <Grid item xs={12} sm={6}> {/* Third item in the first column */}
            <LatestOrders sx={{ height: 'auto' }} game="Elden Ring" level="Beginner" femratings="80%" members="9,678" imageUrl="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg" />
          </Grid>
          <Grid item xs={12} sm={6}> {/* Fourth item in the first column */}
            <LatestOrders sx={{ height: 'auto' }} game="Grand Theft Auto" level="Intermediate" femratings="70%" members="5,678" imageUrl="https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} lg={4}> {/* Second column takes up 1/3 of the width on md and lg screens */}
        <Grid container spacing={3}>
          <Grid item xs={12}> {/* First item in the second column */}
            <Sidebar sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
