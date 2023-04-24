import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const WhiteBoardContainer = styled.div`
  width: 1368px;
  height: 730px;
`

const IframeContainer = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 20px;

  overflow: hidden;
  pointer-events: auto;
  position: relative;
  background-color: #fff;

  iframe {
    width: inherit;
    height: inherit;
  }

  .icon-wrapper {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`

export const Poker = (props: { id: string }) => {
  const [gameId, setGameId] = useState<string | undefined>(undefined)

  useEffect(() => {
    axios.get(`https://lipoker.io/api/check_game_exists?game_id=${props.id}`).then((res) => {
      const { exists } = res.data

      // TODO: need to create and save the game id somewhere else
      // to enable other members to join the same poker game
      if (exists) setGameId(props.id)
      //   else
      //     axios
      //       .get(
      //         `https://lipoker.io/api/create_game?small_blind_amount=5&game_password=&is_timer_enabled=false&timer_length_seconds=30&hand_timer_length_seconds=8&is_god_mode=false&is_tournament=false&auto_buyin_cents=1000&blind_increase_seconds=600&is_in_cents=true`,
      //       )
      //       .then((res) => {
      //         const { gameId: createGameId } = res.data

      //         setGameId(createGameId)
      //       })
    })
  }, [])

  return (
    <WhiteBoardContainer className="whiteboard" id={`poker-${gameId}`}>
      <IframeContainer>{gameId && <iframe src={`https://lipoker.io/game/${gameId}`}></iframe>}</IframeContainer>
    </WhiteBoardContainer>
  )
}
