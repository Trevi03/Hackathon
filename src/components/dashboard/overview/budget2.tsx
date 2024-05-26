import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';
import { Crosshair as CrosshairIcon } from '@phosphor-icons/react/dist/ssr/Crosshair';

export interface BudgetProps2 {
  sx?: SxProps;
  session: string;
  game: string;
  gameRating: string;
  femaleFriendliness: string;
  playernum: string;
  members: string;
  imageUrl: string;
  athenaRating: string;
}

// Use this as join session boxes
export function Budget2({ sx, session, game, gameRating, femaleFriendliness, athenaRating, playernum, members, imageUrl }: BudgetProps2): React.JSX.Element {

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <img src={imageUrl} alt="Game Image" style={{ width: '100%', borderRadius: '8px' }} />
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h4">{session}</Typography>
              <Typography color="text.secondary" variant="overline">
                {/* <b>{"Game: "}</b> {game}<br/> */}
                <b>{"Steam Rating: "}</b> {gameRating} <br />
                <b>{"Female Friendliness: "}</b> {femaleFriendliness} <br />
                <b>{"Athena Friendliness: "}</b> {athenaRating}
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ alignItems: 'center', justifyContent: 'space-between' }} direction="row" spacing={2}>
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
              {"Party size: "}{playernum}
            </Stack>
            <Typography sx={{ textAlign: 'right' }} color="text.secondary" variant="caption">
              {members}{" Members"}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
