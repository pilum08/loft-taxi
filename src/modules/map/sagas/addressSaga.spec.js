import  recordSaga  from "../../recordSaga";
import { addressSaga } from  "./addressListSaga";
import { loadAddressesMap } from "../actions";
import { getAddresses } from "../../../api"

jest.mock("../../../api");

describe("addressesSaga test", () => {
  it("get addresses", async () => {
    getAddresses.mockImplementation(() => ({ status: 200, data: ["Address 1","Address 2"]}));
    const dispatched = await recordSaga(
        addressSaga,
        loadAddressesMap()
    )
    expect(dispatched).toEqual([
      {payload:{
          data:["Address 1","Address 2"],
          status:200
      },
        type: "LOAD_ADDRESSES_MAP_SUCCESS"
      }
    ])
  })
})