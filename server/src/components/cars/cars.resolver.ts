import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car';
import { NewCarInput } from './dto/new-car.input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async updateCar(
    @Args('id') id: string,
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.updateCar(id, newCarData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async deleteCar(@Args('id') id: string): Promise<Car> {
    return await this.carsService.deleteCar(id).catch((err) => {
      throw err;
    });
  }
}
