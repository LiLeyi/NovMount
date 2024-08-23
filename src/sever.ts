import express from 'express';
import bodyParser from 'body-parser';
import { GameSession } from './back_end/Game/GameSession';
import { Player } from './back_end/Player/Player';

const app = express();
const port = 3000;

const gameSession = new GameSession(10)

app.get('/',(req,res) => {
  console.log(gameSession.getAllPublicInviteNumbers())
})

app.get('/api/v1/game/create', (req, res) => {
  // 处理 PUT 请求
  const p = new Player('LiLeyi')
  const game = gameSession.startGameRoom(p,null);
  if(game == null){
    res.status(500).send('Full!')
    return
  } else {
    let resp = {
      invite_code:game.inviteCode
    }
    res.status(201).send(resp)
    console.log(gameSession.getAllPublicInviteNumbers())
  }
});

app.get('/api/v1/game/delete/:room_code', (req, res) => {
  gameSession.deleteGame(Number(req.params.room_code))
  console.log(gameSession.getAllPublicInviteNumbers())
});

app.get('/api/v1/game/join/:room_code', (req, res) => {
  const { username, password } = req.query; // 从查询参数中获取用户名和密码

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  let validateRoom = (room_code:number, password:string)=>{
    if(gameSession.getAllPublicInviteNumbers().includes(room_code)){
      return true
    } else if (gameSession.getAllPrivateInviteNumbers().includes(room_code) && gameSession.games.get(room_code)?.password === password){
      return true
    }
  }

  // 这里可以添加对房间号和密码的验证逻辑
  if (validateRoom(Number(req.params.room_code), <string>password)) {
    // 如果验证成功，可以在这里添加加入房间的逻辑
    gameSession.games.get(Number(req.params.room_code))?.playerJoin(new Player(<string>username))
    res.status(200).send('Joined game successfully!');
  } else {
    res.status(401).send('Invalid room or password');
  }
  console.log(gameSession.getAllPublicInviteNumbers())
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});