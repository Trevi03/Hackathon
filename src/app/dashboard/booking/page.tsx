'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { GameSessionForm } from '@/components/dashboard/booking/game-booking-form';

// export const metadata = { title: `Create Session | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3} sx={{ minHeight: '10vh', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <Typography variant="h4">Create Game Session</Typography>
      </div>
      <Grid container justifyContent="center" alignItems="center" sx={{ width: '1250px' }}>
        <Grid lg={8} md={6} xs={12}>
          <GameSessionForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
