import TariffsRepository from "./TariffsRepository";
import IndexRepository from "./IndexRepository";
import NewsRepository from "./NewsRepository";
import RegistrationRepository from "./RegistrationRepository";
import RecoveryRepository from "./RecoveryRepository";
import LoginRepository from "./LoginRepository";
import PaymentRepository from "./PaymentRepository";
import DeclarationsRepository from "./DeclarationsRepository";
import OrdersRepository from "./OrdersRepository";
import CourierRepository from "./CourierRepository";
import SettingsRepository from "./SettingsRepository";
import AddressesAbroad from "./AddressesAbroad";
import AddressesLocal from "./AddressesLocal";
import UserRepository from "./UserRepository";
import StaticRepository from "./StaticRepository";
import CommitmentsRepository from "./CommitmentsRepository";

export default $axios => ({
  // * AUTH
  registration: RegistrationRepository($axios),
  login: LoginRepository($axios),
  recovery: RecoveryRepository($axios),
  user: UserRepository($axios),

  // * PUBLIC
  index: IndexRepository($axios),
  static: StaticRepository($axios),
  tariffs: TariffsRepository($axios),
  news: NewsRepository($axios),

  // * DASHBOARD
  addresses_abroad: AddressesAbroad($axios),
  addresses_local: AddressesLocal($axios),
  payment: PaymentRepository($axios),
  declarations: DeclarationsRepository($axios),
  orders: OrdersRepository($axios),
  courier: CourierRepository($axios),
  settings: SettingsRepository($axios),
  commitments: CommitmentsRepository($axios)
});
