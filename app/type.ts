
export type LoginScreenProps = {
  handleLogin: (type: 'PIN' | 'Biometric') => void;
  pinInput: string;
  setPinInput: (input: string) => void;
  biometricType: "Face" | "Fingerprint" | null;
  isConnected: boolean;
};

export type HomeScreenProps = {
    handleTransactionHistory: () => void;
  };

export type TransactionHistoryProps =
{
  handleLogin: (type: 'PIN' | 'Biometric') => void;
    data: any[];
    showAmounts: boolean;
    refreshing: boolean;
    handleBiometricAuthentication: () => void;
    handleRefresh: () => void;
    handleItemPress: (item: any) => void;
    isPinInputVisible: boolean;
    pinInput: string;
    setPinInput: React.Dispatch<React.SetStateAction<string>>;
    handlePinLogin: () => void;
  }

  export type DetailsScreenProps = {
      transaction: {
          id: string;recipient: string; amount: string; date: string; description: string; type: string; fromAcc: string; recipientBank: string; transferMethod:string; accNo: string; status:string; referenceNo: string;}
    navigation: any;
  };

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  History: undefined;
  Details: {
    transaction: {
      id: string;
      recipient: string;
      amount: string;
      date: string;
      description: string;
      type: string;
      fromAcc: string;
      recipientBank: string;
      transferMethod: string;
      accNo: string;
      status: string;
      referenceNo: string;
    };
  };
};
