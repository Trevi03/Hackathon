import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget2 } from '@/components/dashboard/overview/budget2';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { Session } from 'inspector';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Athena recommends for you...
      </Typography>
      <Grid container spacing={3}>
      <Grid lg={4} sm={6} xs={12}>
          <Budget2 
            sx={{ height: 'auto' }} 
            session="Baldur's Gate 3" 
            game="Baldur's Gate 3" 
            gameRating="9.9" 
            femaleFriendliness="10.0" 
            athenaRating="9.8.0" 
            playernum='1-4' 
            members='19,678' 
            imageUrl='https://www.godisageek.com/wp-content/uploads/bg3.jpg'
          />
        </Grid>
        <Grid lg={4} sm={6} xs={12}>
          <Budget2 
            sx={{ height: 'auto' }} 
            session="Divinity: Original Sin" 
            game="Divinity: Original Sin" 
            gameRating="9.1" 
            femaleFriendliness="9.4" 
            athenaRating="9.0" 
            playernum='1-4' 
            members='12,118' 
            imageUrl='https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/435150/capsule_616x353.jpg?t=1709728210'
          />
        </Grid>
        <Grid lg={4} sm={6} xs={12}>
          <Budget2 
            sx={{ height: 'auto' }} 
            session="Elden Ring" 
            game="Elden Ring" 
            gameRating="8.0" 
            femaleFriendliness="6.0" 
            athenaRating="9.0" 
            playernum='1-5' 
            members='9,678' 
            imageUrl='https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg'
          />
        </Grid>
        <Grid lg={4} sm={6} xs={12}>
          <Budget2 
            sx={{ height: 'auto' }} 
            session="Grand Theft Auto" 
            game="Grand Theft Auto" 
            gameRating="7.5" 
            femaleFriendliness="5.9" 
            athenaRating="4.7" 
            playernum='1-3' 
            members='5,678' 
            imageUrl='https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
          />
        </Grid>

        {/* Uncomment and modify other components as needed */}
        {/* <Grid lg={4} md={6} xs={12}>
          <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
        </Grid>
        <Grid lg={4} md={6} xs={12}>
          <LatestProducts
            products={[
              {
                id: 'PRD-005',
                name: 'Soja & Co. Eucalyptus',
                image: '/assets/product-5.png',
                updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
              },
              {
                id: 'PRD-004',
                name: 'Necessaire Body Lotion',
                image: '/assets/product-4.png',
                updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
              },
              {
                id: 'PRD-003',
                name: 'Ritual of Sakura',
                image: '/assets/product-3.png',
                updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
              },
              {
                id: 'PRD-002',
                name: 'Lancome Rouge',
                image: '/assets/product-2.png',
                updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
              },
              {
                id: 'PRD-001',
                name: 'Erbology Aloe Vera',
                image: '/assets/product-1.png',
                updatedAt: dayjs().subtract(10, 'minutes').toDate(),
              },
            ]}
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid lg={8} md={12} xs={12}>
          <LatestOrders
            orders={[
              {
                id: 'ORD-007',
                customer: { name: 'Ekaterina Tankova' },
                amount: 30.5,
                status: 'pending',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
              {
                id: 'ORD-006',
                customer: { name: 'Cao Yu' },
                amount: 25.1,
                status: 'delivered',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
              {
                id: 'ORD-004',
                customer: { name: 'Alexa Richardson' },
                amount: 10.99,
                status: 'refunded',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
              {
                id: 'ORD-003',
                customer: { name: 'Anje Keizer' },
                amount: 96.43,
                status: 'pending',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
              {
                id: 'ORD-002',
                customer: { name: 'Clarke Gillebert' },
                amount: 32.54,
                status: 'delivered',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
              {
                id: 'ORD-001',
                customer: { name: 'Adam Denisov' },
                amount: 16.76,
                status: 'delivered',
                createdAt: dayjs().subtract(10, 'minutes').toDate(),
              },
            ]}
            sx={{ height: '100%' }}
          />
        </Grid> */}
      </Grid>
    </>
  );
}










