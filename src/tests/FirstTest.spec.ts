import {User} from '../models/User';
test('its should be ok', ()=>{
  const user = new User();
  user.name = "Roberto";

  expect(user.name).toEqual('Roberto')
})
