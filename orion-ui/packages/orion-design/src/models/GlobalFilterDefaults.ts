/* eslint-disable @typescript-eslint/member-ordering */
import { GlobalFilter, RunState, RunTimeFrame } from '@/types/filters/global'

export class GlobalFilterDefaults implements GlobalFilter {
  private readonly defaultStates: RunState[] = [
    { name: 'Scheduled', type: 'SCHEDULED' },
    { name: 'Pending', type: 'PENDING' },
    { name: 'Running', type: 'RUNNING' },
    { name: 'Completed', type: 'COMPLETED' },
    { name: 'Failed', type: 'FAILED' },
    { name: 'Cancelled', type: 'CANCELLED' },
  ]
  private readonly defaultTimeFrame: RunTimeFrame = {
    dynamic: true,
    from: {
      value: 7,
      unit: 'days',
    },
    to: {
      value: 1,
      unit: 'days',
    },
  }

  public flows = {}
  public deployments = {}
  // eslint-disable-next-line camelcase
  public flow_runs = {
    timeframe: this.defaultTimeFrame,
    states: this.defaultStates,
  }
  // eslint-disable-next-line camelcase
  public task_runs = {}
}