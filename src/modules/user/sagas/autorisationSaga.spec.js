import  recordSaga  from "../../recordSaga";
import {authSaga} from  "./authorizationSaga";
import { signInUser } from '../actions';
import {signIn} from '../../../api'


jest.mock("../../../api");

describe("authorisationSaga test", () => {
  it("authorisation", async () => {
    signIn.mockImplementation(() => ({"success":true,"token":"testtoken"}));
    const dispatched = await recordSaga(
      authSaga,
        signInUser({login: "testLogin", password: "testPassword"})
    )
    expect(dispatched).toEqual([
      {
        type: 'SIGN_IN_USER_SUCCESS',
        payload:{
          token:'testtoken',
          success:true,
        }
        
        
      }
    ])
  })
})