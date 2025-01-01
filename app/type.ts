export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    History: undefined;
    Details: { transaction: {
       id: string;recipient: string; amount: string; date: string; description: string; type: string; fromAcc: string; recipientBank: string; transferMethod:string; accNo: string; status:string; referenceNo: string;
} };

  };

  