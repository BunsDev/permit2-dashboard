/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenBackups, TokenBackupsInterface } from "../TokenBackups";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "permit2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidContractSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNewAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignerLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidThreshold",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughSignatures",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSorted",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sigs",
            type: "bytes[]",
          },
          {
            internalType: "address[]",
            name: "addresses",
            type: "address[]",
          },
        ],
        internalType: "struct TokenBackups.Pals",
        name: "pals",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "backup",
        type: "bytes",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct ISignatureTransfer.TokenPermissions[]",
            name: "permitted",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
        name: "permitData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "newAddress",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "requestedAmount",
                type: "uint256",
              },
            ],
            internalType:
              "struct ISignatureTransfer.SignatureTransferDetails[]",
            name: "transferDetails",
            type: "tuple[]",
          },
        ],
        internalType: "struct PalSignature",
        name: "palData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "signers",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "threshold",
            type: "uint256",
          },
        ],
        internalType: "struct BackupWitness",
        name: "witnessData",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461007357601f61100538819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b0381169081900361007357608052604051610f76908161008f82396080518181816105f501526107640152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b6000803560e01c633eb52cf01461002857600080fd5b34610c4e5760c0366003190112610c4e576001600160401b0360043511610c4e57604060043536036003190112610c4e576001600160401b0360243511610c4e57366023602435011215610c4e576001600160401b036024356004013511610c4e573660248035600401358135010111610c4e576001600160401b0360443511610c4e57606060443536036003190112610c4e576001600160401b0360643511610c4e57604060643536036003190112610c4e576001600160401b0360843511610c4e57604060843536036003190112610c4e5760a4356001600160a01b0381169003610c4e576001600160a01b0360a43581169061012b606435600401610c6a565b1614610c3d5761013f600480350180610c7e565b61015d610156602460043501600435600401610c7e565b3691610d52565b926024608435013515610c2b5761017960046084350180610c7e565b90506024608435013511610c1957602460843501358203610c07578091604051936101a385610cb3565b6101b1606435600401610c51565b85526001600160401b036024606435013511610c0357366064356024810135016023011215610c03576101ef60643560248101350160040135610d3b565b916101fd6040519384610d1a565b600460246064358181013501918201358086526020860195923660069290921b0190910111610bff576024806064350135606435010180945b606435602481810135909101600481013560061b01018210610bc75750506020870152610261610eba565b6040516102f360638260208101946c0a0c2d8a6d2cedcc2e8eae4ca5609b1b8652721859191c995cdcc81b995dd059191c995cdccb606a1b602d8301527f5369676e61747572655472616e7366657244657461696c735b5d2064657461696040830152626c732960e81b60608301526102e38151809260208686019101610e07565b8101036043810184520182610d1a565b51902094602060018060a01b038851169701519788519661031388610d3b565b97610321604051998a610d1a565b808952610330601f1991610d3b565b013660208a0137865b8a518110156103aa57806103506103a5928d610e90565b51610359610eba565b6020815191012090602060018060a01b038251169101516040519160208301938452604083015260608201526060815261039281610ce4565b51902061039f828c610e90565b52610e6b565b610339565b5088889594939560405160208101918260208251919201908c5b818110610bb157505050816103e19103601f198101835282610d1a565b5190206040519160208301938452604083015260608201526060815261040681610ce4565b5190209286925b808410610866578787602219606435360301602460643501351215610862576001600160401b036064356024810135016004013511610862576064356024810135016004013560061b360381136108625760405161046a81610cb3565b608435600401356001600160401b03811161082b57366023826084350101121561082b576104a690369060843501600481013590602401610d52565b81526024608435013560208201526104bc610da8565b602081519101209080516040516020810191826020825191920190885b81811061084357505050906104fa816020949303601f198101835282610d1a565b5190209101516040519160208301938452604083015260608201526060815261052281610ce4565b5190209061052e610da8565b604051908160608101106001600160401b0360608401111761082f5760356105f39160608401604052602e84527f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c7560208501526d696e7432353620616d6f756e742960901b604085015260405193849174546f6b656e4261636b757073207769746e6573732960581b60208401526105cf8151809260208787019101610e07565b82016105e48251809360208785019101610e07565b01036015810184520182610d1a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163b1561082b576040519263fe8ec1a760e01b845260c060048501526044356004013560221960443536030181121561082757604435016001600160401b0360048201351161082757600481013560061b3603602482011361082757918593918593606060c48601526101248501600482013590526101448501906024810190875b600482013581106107f6575050506044803560248181013560e48901529101356101048701528582036003190186820152606435908101350160040135815260200192855b6064356024810135016004013581106107cf57505060a4356001600160a01b0316604485015260648401528282036003190160848401528051808352839261075f926020929061073a908290858501908601610e07565b601f01601f191601838103601c0160a485015201600460248035918201359101610e4a565b0381837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af180156107c45761079c575080f35b6001600160401b0381116107b05760405280f35b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b929450945091604080826107e560019489610e2a565b0195019101918593918795936106e3565b9260019194969850829597506040816108128293600496610e2a565b0195019201889694929150928997959361069e565b8580fd5b8380fd5b634e487b7160e01b85526041600452602485fd5b82516001600160a01b03168452602093840193909201916001016104d9565b5080fd5b9496939592949192916001600160a01b036108818786610e90565b511697601e19833603018760051b8401351215610827576001600160401b038760051b8401358401351161082757600587901b83013583018035360360209091011361082757883b610ae55760418760051b84013584013514600014610a5f576108fd6020600589901b85013585018035810182019101610f2a565b908860051b85013585013560401015610a0c5760808a6020938a9360ff60608e60051b8b01358b01013560f81c5b60405194855216868401526040830152606082015282805260015afa15610a545785516001600160a01b03168015610a425789036109fa575b6001600160a01b0316881115610a30578496855b61098760046084350180610c7e565b9050811015610a205761099f60046084350180610c7e565b821015610a0c578a906001600160a01b03906109c090600585901b01610c6a565b16146109d4576109cf90610e6b565b610978565b5092965093966001959391955b156109fa576109f09093610e6b565b929490919361040d565b604051632057875960e21b8152600490fd5b634e487b7160e01b88526032600452602488fd5b50929697909497959391956109e1565b60405163ba50f91160e01b8152600490fd5b604051638baa579f60e01b8152600490fd5b6040513d87823e3d90fd5b60408760051b84013584013514600014610ad357610a8f6020600589901b85013585018035810182019101610f2a565b6001600160ff1b038116919060ff81811c601b018110610abf576020938a9360ff601b8f94956080961c0161092b565b634e487b7160e01b8a52601160045260248afd5b604051634be6321b60e01b8152600490fd5b60408051630b135d3f60e11b8152600481018a9052602481019190915260208180610b216044820160058d901b89013589018035908601610e4a565b03818d5afa908115610ba6578791610b5f575b506001600160e01b0319166374eca2c160e11b011561096457604051632c19a72f60e21b8152600490fd5b90506020813d602011610b9e575b81610b7a60209383610d1a565b81010312610b9a57516001600160e01b031981168103610b9a578a610b34565b8680fd5b3d9150610b6d565b6040513d89823e3d90fd5b82518452602093840193909201916001016103c4565b604082360312610b9a5760206040918251610be181610cb3565b610bea85610c51565b81528285013583820152815201910190610236565b8480fd5b8280fd5b60405163e246dc6360e01b8152600490fd5b60405163168f530160e01b8152600490fd5b60405163aabd5a0960e01b8152600490fd5b630e4eb4b560e31b60805260046080fd5b80fd5b35906001600160a01b0382168203610c6557565b600080fd5b356001600160a01b0381168103610c655790565b903590601e1981360301821215610c6557018035906001600160401b038211610c6557602001918160051b36038313610c6557565b604081019081106001600160401b03821117610cce57604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117610cce57604052565b606081019081106001600160401b03821117610cce57604052565b90601f801991011681019081106001600160401b03821117610cce57604052565b6001600160401b038111610cce5760051b60200190565b9291610d5d82610d3b565b91610d6b6040519384610d1a565b829481845260208094019160051b8101928311610c6557905b828210610d915750505050565b838091610d9d84610c51565b815201910190610d84565b6040516c0a8ded6cadc84c2c6d6eae0e65609b1b6020820152711859191c995cdcd6d7481cda59db995c9ccb60721b602d8201527175696e74323536207468726573686f6c642960701b603f82015260318152610e0481610cff565b90565b60005b838110610e1a5750506000910152565b8181015183820152602001610e0a565b60209081906001600160a01b03610e4082610c51565b1684520135910152565b908060209392818452848401376000828201840152601f01601f1916010190565b6000198114610e7a5760010190565b634e487b7160e01b600052601160045260246000fd5b8051821015610ea45760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6040517f5369676e61747572655472616e7366657244657461696c73280000000000000060208201526a1859191c995cdcc81d1bcb60aa1b60398201527f75696e7432353620726571756573746564416d6f756e742900000000000000006044820152603c8152610e0481610cff565b9190826040910312610c6557602082359201359056fea2646970667358221220da7091374a366ab27a67e61c9fb2117b65e83d699bf6cdb778ff5f081759568d64736f6c63430008110033";

type TokenBackupsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenBackupsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenBackups__factory extends ContractFactory {
  constructor(...args: TokenBackupsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    permit2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenBackups> {
    return super.deploy(permit2, overrides || {}) as Promise<TokenBackups>;
  }
  override getDeployTransaction(
    permit2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(permit2, overrides || {});
  }
  override attach(address: string): TokenBackups {
    return super.attach(address) as TokenBackups;
  }
  override connect(signer: Signer): TokenBackups__factory {
    return super.connect(signer) as TokenBackups__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenBackupsInterface {
    return new utils.Interface(_abi) as TokenBackupsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenBackups {
    return new Contract(address, _abi, signerOrProvider) as TokenBackups;
  }
}
