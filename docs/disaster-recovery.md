# Disaster Recovery and Operations Guide

## Backups
- **PostgreSQL**: Use Azure Backup for PostgreSQL managed service.
- **AKS**: Use Azure Business Continuity (Project Velero) for cluster state backups.

## Rollback Procedures
### Helm Rollback
```bash
helm list
helm rollback ecommerce <revision_number>
```

### ArgoCD Rollback
Use the ArgoCD UI or CLI:
```bash
argocd app rollback ecommerce-api
```

### Argo Rollouts Rollback
```bash
kubectl argo rollouts undo ecommerce
```

## Monitoring Alerts
- **High CPU**: > 80% for 5 mins.
- **Error Rate**: > 5% 5xx errors.
- **Pod Restarts**: > 10 restarts in 1 hour.
