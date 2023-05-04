import axios from 'axios'

export const usePoker = () => {
  const isExist = (id: string) => {
    return axios.get(`https://lipoker.io/api/check_game_exists?game_id=${id}`).then<boolean>((res) => {
      const { exists } = res.data

      return exists
    })
  }

  const createPoker = () => {
    return axios
      .get(
        `https://lipoker.io/api/create_game?small_blind_amount=5&game_password=&is_timer_enabled=false&timer_length_seconds=30&hand_timer_length_seconds=8&is_god_mode=false&is_tournament=false&auto_buyin_cents=1000&blind_increase_seconds=600&is_in_cents=true`,
      )
      .then<string>((res) => {
        const { gameId: createGameId } = res.data

        return createGameId
      })
  }

  return { isExist, createPoker }
}
